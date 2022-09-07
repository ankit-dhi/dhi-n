import React from 'react';

export default function Trial() {

	React.useEffect(() => {
		console.log("hi")
	}, []);

	return (<>hi</>);
}