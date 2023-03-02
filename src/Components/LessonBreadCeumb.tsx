import React from 'react';
import { Breadcrumbs,Link } from '@mui/material';

export const LessonBreadCeumb = () => {
  return (
    <Breadcrumbs separator="-" maxItems={3}>

    <Link href='/' underline='hover' >Anasayfa</Link>
    <Link href='/' underline='hover'>Blog</Link>
    <Link href='/' underline='none'>Vepa Hocanazarov</Link>

    <Link href='/' underline='none'>Vepa Hocanazarov</Link>
    <Link href='/' underline='none'>Vepa Hocanazarov</Link>
    <Link href='/' underline='none'>Vepa Hocanazarov</Link>

    </Breadcrumbs>
    
  )
}
