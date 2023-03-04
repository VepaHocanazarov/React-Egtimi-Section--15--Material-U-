import React, { useState } from 'react';
import { Button, Snackbar, IconButton } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";

export const LessonSnackBar = () => {

    const [openSnackbar, setopenSnackbar] = useState(false);

    const handleClose = () => {
        setopenSnackbar(false);
    }

    const handleOpen = () => {

        setopenSnackbar(true);

    };

    const action = (
        <React.Fragment>

            <Button onClick={handleClose} color='secondary' size='small' >Geri Al</Button>
            <IconButton>
                <CloseIcon onClick={handleClose} sx={{ color: "white" }} />
            </IconButton>

        </React.Fragment>
    )
    return (
        <div>
            <Button onClick={handleOpen}  >Snackbar'ı Aç</Button>
            <Snackbar
                message="Bir Hatta Oluştu"
                open={openSnackbar}
                action={action}
                anchorOrigin={{ vertical: "top", horizontal: "center" }}
                autoHideDuration={2000}
                onClose={handleClose}
            />
        </div>
    )
}

