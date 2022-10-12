Working...

  <!-- +--------+                                           +---------------+ -->
  <!-- |        |--(A)------- Authorization Grant --------->|               | -->
  <!-- |        |                                           |               | -->
  <!-- |        |<-(B)----------- Access Token -------------|               | -->
  <!-- |        |               & Refresh Token             |               | -->
  <!-- |        |                                           |               | -->
  <!-- |        |                            +----------+   |               | -->
  <!-- |        |--(C)---- Access Token ---->|          |   |               | -->
  <!-- |        |                            |          |   |               | -->
  <!-- |        |<-(D)- Protected Resource --| Resource |   | Authorization | -->
  <!-- | Client |                            |  Server  |   |     Server    | -->
  <!-- |        |--(E)---- Access Token ---->|          |   |               | -->
  <!-- |        |                            |          |   |               | -->
  <!-- |        |<-(F)- Invalid Token Error -|          |   |               | -->
  <!-- |        |                            +----------+   |               | -->
  <!-- |        |                                           |               | -->
  <!-- |        |--(G)----------- Refresh Token ----------->|               | -->
  <!-- |        |                                           |               | -->
  <!-- |        |<-(H)----------- Access Token -------------|               | -->
  <!-- +--------+           & Optional Refresh Token        +---------------+ -->

                      Refreshing an Expired Access Token

The flow illustrated in that above includes the following steps:

(A) The client requests an access token by authenticating with the
authorization server and presenting an authorization grant.

(B) The authorization server authenticates the client and validates
the authorization grant, and if valid, issues an access token
and a refresh token.

(C) The client makes a protected resource request to the resource
server by presenting the access token.

(D) The resource server validates the access token, and if valid,
serves the request.

(E) Steps (C) and (D) repeat until the access token expires. If the
client knows the access token expired, it skips to step (G);
otherwise, it makes another protected resource request.

(F) Since the access token is invalid, the resource server returns
an invalid token error.

(G) The client requests a new access token by authenticating with
the authorization server and presenting the refresh token. The
client authentication requirements are based on the client type
and on the authorization server policies.

(H) The authorization server authenticates the client and validates
the refresh token, and if valid, issues a new access token (and,
optionally, a new refresh token).
