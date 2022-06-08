import * as React from 'react';
import Breadcrumbs from '@mui/material/Breadcrumbs';
import Link from '@mui/material/Link';

function handleClick(event) {
    event.preventDefault();
    console.info('You clicked a breadcrumb.');
}

export default function BasicBreadcrumbs({ title1, title2, title3 }) {
    return (
        <div role="presentation" onClick={handleClick}>
            <Breadcrumbs aria-label="breadcrumb">
                <Link underline="hover" color="inherit" href="/">
                    {title1}
                </Link>
                <Link underline="hover" color="inherit" href="/material-ui/getting-started/installation/">
                    {title2}
                </Link>
                <Link underline="hover" color="text.primary" href="/material-ui/react-breadcrumbs/" aria-current="page">
                    {title3}
                </Link>
            </Breadcrumbs>
        </div>
    );
}
