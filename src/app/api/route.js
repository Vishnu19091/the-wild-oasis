export async function GET(request) {
  return Response.json({
    requestURL: `${request.url}`,
    requestMethod: `${request.method}`,
  });
}
