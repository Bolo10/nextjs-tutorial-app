const { default: Link } = require('next/link');
export const metadata = {
  title: 'SubTienda',
};
export default function TiendaLayout({ children }) {
  return (
    <>
      <nav>
        <h3>SubNav</h3>

        <ul>
          <li>
            <Link href="/">Categorias</Link>
          </li>
        </ul>
      </nav>
      {children}
    </>
  );
}
