import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";

export default function Card({ title, value }) {
    return (
        <Card>
            <CardContent>
                <Typography variant="h6">{title || "Registros do mês"}</Typography>
                <Typography variant="h4">{value || 33}</Typography>
            </CardContent>
        </Card>
    );
}
