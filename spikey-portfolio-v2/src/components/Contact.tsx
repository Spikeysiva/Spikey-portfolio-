import { useRef, useState, type ChangeEvent, type FormEvent } from 'react';
import { ArrowUpRight, Mail, MessageCircle, Send } from 'lucide-react';
import { hasEmail, site } from '../data/site';
import { CurlyArrow, Sparkle, Star } from './Doodles';
import { Reveal } from './Reveal';
import { SocialLinks } from './SocialLinks';
import './Contact.css';

const projectTypes = [
  'Branding & Identity',
  'Poster & Graphic Design',
  'Packaging Design',
  'Social Media Design',
  'Illustration',
  'Motion Graphics & Animation',
  'Print Design',
  'Product Design',
  'Something else',
];

interface FormState {
  name: string;
  email: string;
  type: string;
  message: string;
}

type Errors = Partial<Record<keyof FormState, string>>;
type Status = { kind: 'idle' } | { kind: 'sent' } | { kind: 'unconfigured' };

const EMPTY: FormState = { name: '', email: '', type: '', message: '' };
const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function validate(values: FormState): Errors {
  const errors: Errors = {};
  if (!values.name.trim()) errors.name = 'Please tell me your name.';
  if (!values.email.trim()) errors.email = 'I need an email to reply to.';
  else if (!EMAIL_RE.test(values.email.trim())) errors.email = "That email doesn't look quite right.";
  if (!values.type) errors.type = 'Pick the closest project type.';
  if (values.message.trim().length < 10) errors.message = 'Tell me a little more (10+ characters).';
  return errors;
}

export function Contact() {
  const [values, setValues] = useState<FormState>(EMPTY);
  const [errors, setErrors] = useState<Errors>({});
  const [status, setStatus] = useState<Status>({ kind: 'idle' });
  const nameRef = useRef<HTMLInputElement>(null);

  const onChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setValues((v) => ({ ...v, [name]: value }));
    if (errors[name as keyof FormState]) setErrors((er) => ({ ...er, [name]: undefined }));
  };

  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const found = validate(values);
    setErrors(found);
    const firstError = Object.keys(found)[0];
    if (firstError) {
      document.getElementById(`cf-${firstError}`)?.focus();
      return;
    }

    if (!hasEmail) {
      setStatus({ kind: 'unconfigured' });
      return;
    }

    // No backend: hand the message to the visitor's email app, pre-filled.
    const subject = `New project enquiry — ${values.type}`;
    const body = `Hi SPIKEY!\n\n${values.message.trim()}\n\n— ${values.name.trim()}\n${values.email.trim()}\nProject type: ${values.type}`;
    window.location.href = `mailto:${site.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    setStatus({ kind: 'sent' });
    setValues(EMPTY);
  };

  const focusForm = () => {
    // Let the browser scroll to the anchor first, then focus the first field.
    window.setTimeout(() => nameRef.current?.focus({ preventScroll: true }), 450);
  };

  const fieldProps = (name: keyof FormState) => ({
    id: `cf-${name}`,
    name,
    value: values[name],
    onChange,
    'aria-invalid': errors[name] ? true : undefined,
    'aria-describedby': errors[name] ? `cf-${name}-error` : undefined,
  });

  const errorFor = (name: keyof FormState) =>
    errors[name] ? (
      <span id={`cf-${name}-error`} className="field__error">
        {errors[name]}
      </span>
    ) : null;

  return (
    <section id="contact" className="contact" aria-labelledby="contact-title">
      <div className="contact__panel">
        <Star className="contact__deco contact__deco--star float" color="#FFE36E" />
        <Sparkle className="contact__deco contact__deco--sparkle float float--slow" color="#FAF8F5" />

        <div className="container contact__inner">
          <Reveal className="contact__copy">
            <span className="eyebrow eyebrow--light">Contact</span>
            <h2 id="contact-title" className="contact__title">
              Got Something <span className="contact__cool">Cool</span> in Mind?
            </h2>
            <p className="contact__lede">
              Have a project, an idea or just want to say hello? Let's create something awesome together.
            </p>

            <div className="contact__ctas">
              <a href="#contact-form" className="btn btn--paper btn--lg" onClick={focusForm}>
                Let's Talk <MessageCircle size={18} aria-hidden="true" />
              </a>
              {hasEmail ? (
                <a href={`mailto:${site.email}`} className="btn btn--outline-light btn--lg">
                  Email Me <Mail size={18} aria-hidden="true" />
                </a>
              ) : (
                <a
                  href="#contact-form"
                  className="btn btn--outline-light btn--lg"
                  onClick={focusForm}
                  title="Email address not configured yet — use the form"
                >
                  Email Me <Mail size={18} aria-hidden="true" />
                </a>
              )}
            </div>

            <div className="contact__socials">
              <span className="contact__socials-label">Find me around the web</span>
              <SocialLinks tone="light" />
            </div>

            <div className="contact__hint" aria-hidden="true">
              <span>drop me a line</span>
              <CurlyArrow className="contact__hint-arrow" color="#FAF8F5" />
            </div>
          </Reveal>

          <Reveal delay={120} className="contact__form-wrap">
            <form id="contact-form" className="contact__form" onSubmit={onSubmit} noValidate>
              <div className="field-row">
                <div className="field">
                  <label htmlFor="cf-name">Name</label>
                  <input
                    {...fieldProps('name')}
                    ref={nameRef}
                    type="text"
                    autoComplete="name"
                    placeholder="What should I call you?"
                    required
                  />
                  {errorFor('name')}
                </div>
                <div className="field">
                  <label htmlFor="cf-email">Email</label>
                  <input
                    {...fieldProps('email')}
                    type="email"
                    autoComplete="email"
                    inputMode="email"
                    placeholder="you@yourmail.com"
                    required
                  />
                  {errorFor('email')}
                </div>
              </div>

              <div className="field">
                <label htmlFor="cf-type">Project Type</label>
                <div className="select">
                  <select {...fieldProps('type')} required>
                    <option value="" disabled>
                      Choose one…
                    </option>
                    {projectTypes.map((t) => (
                      <option key={t} value={t}>
                        {t}
                      </option>
                    ))}
                  </select>
                </div>
                {errorFor('type')}
              </div>

              <div className="field">
                <label htmlFor="cf-message">Message</label>
                <textarea
                  {...fieldProps('message')}
                  rows={5}
                  placeholder="Tell me about your idea, timeline, anything!"
                  required
                />
                {errorFor('message')}
              </div>

              <button type="submit" className="btn btn--pink btn--lg contact__submit">
                Send Message <Send size={18} aria-hidden="true" />
              </button>

              <div className="contact__status" role="status" aria-live="polite">
                {status.kind === 'sent' && (
                  <p className="notice notice--ok">
                    Your email app should open with the message ready to send. Thank you! 💌
                  </p>
                )}
                {status.kind === 'unconfigured' && (
                  <p className="notice notice--warn">
                    The contact email hasn't been set up yet, so this message can't be sent. (Site owner: add
                    your address in <code>src/data/site.ts</code>.)
                  </p>
                )}
              </div>
              <p className="contact__fineprint">
                No spam, no newsletters. Just a reply from me. <ArrowUpRight size={14} aria-hidden="true" />
              </p>
            </form>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
