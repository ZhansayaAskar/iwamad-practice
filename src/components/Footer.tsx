type FooterProps = {
    author: string;
    year: number;
  };
  
  function Footer({ author, year }: FooterProps) {
    return (
      <footer className="page-footer text-center mt-8 text-sm text-gray-500">
        <p>© {year} {author}</p>
      </footer>
    );
  }
  
  export default Footer;