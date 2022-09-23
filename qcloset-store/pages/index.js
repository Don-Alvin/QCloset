import Head from "next/head";
import { Typography } from "@mui/material";

export default function Home() {
	return (
		<div>
			<Head>
				<title>Qupid Closet</title>
				<meta
					name="description"
					content="E-Commerce Website by Next and Sanity"
				/>
				<link rel="icon" href="/favicon.ico" />
			</Head>

			<Typography component="h1" variant="h1">
				Qupid Closet
			</Typography>
		</div>
	);
}
