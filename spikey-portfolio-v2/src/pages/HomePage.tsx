import { About } from '../components/About';
import { Contact } from '../components/Contact';
import { Hero } from '../components/Hero';
import { Marquee } from '../components/Marquee';
import { Process } from '../components/Process';
import { ProjectGallery } from '../components/ProjectGallery';
import { Services } from '../components/Services';
import { SoftwareGrid } from '../components/SoftwareGrid';

export function HomePage() {
  return (
    <>
      <Hero />
      <Marquee />
      <ProjectGallery />
      <Services />
      <SoftwareGrid />
      <About />
      <Process />
      <Contact />
    </>
  );
}
