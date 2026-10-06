import {
  CustomCursor,
  Scene,
  GridLines,
  Navbar,
  Hero,
  Services,
  Contact,
} from './components';

export default function Home() {
  return (
    <div className="bg-zinc-950 text-zinc-300 font-sans antialiased overflow-x-hidden selection:bg-zinc-200 selection:text-zinc-950">
      <CustomCursor />
      <Scene />
      <GridLines />
      <Navbar />
      <Hero />
      <Services />
      <Contact />
    </div>
  );
}
