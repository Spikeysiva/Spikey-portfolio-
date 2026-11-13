import { About } from '../components/About';
import { Contact } from '../components/Contact';
import { ExperimentLab } from '../components/ExperimentLab';
import { Hero } from '../components/Hero';
import { Marquee } from '../components/Marquee';
import { Navbar } from '../components/Navbar';
import { Process } from '../components/Process';
import { ProjectGallery } from '../components/ProjectGallery';
import { Services } from '../components/Services';
import { SoftwareGrid } from '../components/SoftwareGrid';

export function HomePage({ active }: { active: string }) {
  return (
    <>
      {/* intro screen: hero → pink ticker → navigation (directly below the ticker) */}
      <div className="intro">
        <Hero />
        <Marquee />
        <header className="nav-row">
          <div className="container">
            <Navbar active={active} />
          </div>
        </header>
      </div>
      <ProjectGallery />
      <ExperimentLab />
      <Services />
      <SoftwareGrid />
      <About />
      <Process />
      <Contact />
    </>
  );
}
