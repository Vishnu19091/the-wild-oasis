/*

This is a global loader file, this will apply to all routes/pages of this app.

It uses streaming to display the content while the data are being fetched

THIS ONLY WORKS IF JAVASCRIPT IS ENABLED IN THE BROWSER;
if not then it won't.

another thing is that if there is 20 more components and
one data fetching inside a page
it will be replaced by this component,
but we can overcome that using Suspense

*/

function Loading() {
  return <p>LOADING DATA....</p>;
}

export default Loading;
