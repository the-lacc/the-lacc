import { FC, MouseEvent } from 'react';

import anchorClick from '@helpers/anchorClick';

type Props = {
    type?: 'dark' | 'white'
    text: string
    href: string
    className?: string
}

const Button: FC<Props> = ({className, text, href, type = 'white'}) => {
    const anchorHandleClick = (e: MouseEvent<HTMLAnchorElement>) => {
        anchorClick(e);
    }

    return (
        <a href={href} className={`themeButton ${className} ${type}`} onClick={anchorHandleClick}>
            {text}
        </a>
    )
}

export default Button;