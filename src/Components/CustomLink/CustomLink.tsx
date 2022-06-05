import { Link, useMatch, useResolvedPath } from 'react-router-dom';
type CustomLinks = {
    children: string,
    to: string,
    props?: string
}


function CustomLink({ children, to, ...props }: CustomLinks) {
    let resolved = useResolvedPath(to);
    let match = useMatch({ path: resolved.pathname, end: true });

    return (
        <div>
            <Link
                style={{ color: match ? "red" : "black", borderBottom: match ? '3px solid red' : '3px solid #dfe6e0', padding: '2.5px 20px', }}
                to={to}
                {...props}
            >
                {children}
            </Link>


        </div >
    );
}

export default CustomLink;