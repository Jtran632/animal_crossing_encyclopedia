export default function FooterComponent() {
  return (
    <footer className="bg-white text-black text-center p-4 border-t border-black">
      <div className="flex justify-center gap-1 text-xs">
        <div>Data is provided by</div>
        <a
          href="https://nookipedia.com"
          className="underline underline-offset-2"
        >
          Nookpedia api licensed under CC BY 3.0,
        </a>
        <div>and</div>
        <a
          href="https://github.com/Norviah/animal-crossing"
          className="underline underline-offset-2"
        >
          Norviah github database, licensed under MIT
        </a>
      </div>
    </footer>
  );
}
