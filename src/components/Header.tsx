type HeaderProps = {
    title: string;
  };
  
  function Header({ title }: HeaderProps) {
    return (
      <header className="page-header text-center mb-6">
        <h2 className="text-xl font-semibold text-gray-800">{title}</h2>
      </header>
    );
  }
  
  export default Header;