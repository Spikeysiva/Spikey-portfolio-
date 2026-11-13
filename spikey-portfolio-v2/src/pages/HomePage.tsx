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
      <Hero />
      <Marquee />
      {/* navigation row: directly below the pink ticker */}
      <header className="nav-row">
        <div className="container">
          <Navbar active={active} />
        </div>
      </header>
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
