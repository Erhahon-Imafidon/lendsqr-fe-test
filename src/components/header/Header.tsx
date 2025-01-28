import './header.scss';

type HeaderProps = {
    title: string;
    subTitle: string;
    className?: string;
};

const Header = ({ title, subTitle, className = '' }: HeaderProps) => {
    return (
        <header className={`header ${className}`}>
            <h1>{title}</h1>
            <h4>{subTitle}</h4>
        </header>
    );
};

export default Header;
