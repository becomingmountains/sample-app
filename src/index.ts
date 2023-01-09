import express from "express";
const app = express();
const port = 8080; // default port to listen

// define a route handler for the default home page
app.get( "/health", ( req, res ) => {
    res.send( "OK!" );
} );

app.get("/event/:eventId", ( req, res ) => {
    const eventId: string = req.params.eventId;

    res.send( `Thank you for visiting Event: ${eventId}` );
})

// start the Express server
app.listen( port, () => {
    console.log( `server started at http://localhost:${ port }` );
} );