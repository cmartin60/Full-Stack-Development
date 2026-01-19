const currentYear = new Date().getFullYear();

export default function Footer() {
  return (
    <footer>
      Copyright Pixell River Financial <span id="year">{currentYear}</span>.
    </footer>
  );
}