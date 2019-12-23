	// Node Modules
	const BodyParser = require( 'body-parser' );
	const Express = require( 'express' );

	// Primary Variable
	const App = Express();

	// Parse request of content-type - application/x-www-form-urlencoded
	App.use( BodyParser.urlencoded( { extended: false } ) );

	// Parse request of content-type - application/json
	App.use( BodyParser.json() );

	// Server Running Message
	var Server = App.listen( 3000, () => {
		console.log( "Run on port 3000" )
	} );
	App.get( '/', function( req, res ) {
		return res.json({message:"OK"})
	} );
