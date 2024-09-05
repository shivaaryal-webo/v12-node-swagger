/**
 * @openapi
 * '/auth/register':
 *  post:
 *     tags:
 *       - Auth
 *     summary: Create a user
 *     requestBody:
 *      required: true
 *      content:
 *        application/json:
 *           schema:
 *            type: object
 *            required:
 *              - username
 *              - email
 *              - password
 *            properties:
 *              username:
 *                type: string
 *                default: johndoe 
 *              email:
 *                type: string
 *                default: johndoe@mail.com
 *              password:
 *                type: string
 *                default: johnDoe20!@
 *     responses:
 *      201:
 *        description: Created
 *      409:
 *        description: Conflict
 *      404:
 *        description: Not Found
 *      500:
 *        description: Server Error
 */

/**
 * @swagger
 * '/auth/login':
 *  post:
 *     tags:
 *       - Auth
 *     summary: Login User
 *     requestBody:
 *      required: true
 *      content:
 *        application/json:
 *           schema:
 *            type: object
 *            required:
 *              - email
 *              - password
 *              - remember_me
 *            properties:
 *              email:
 *                type: string
 *                default: johndoe@mail.com
 *              password:
 *                type: string
 *                default: johnDoe20!@
 *              remember_me:
 *                type: boolean
 *                default: false
 *     responses:
 *       200:
 *         description: Login success
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               description: With 2fa login details
 *               example:
 *                 status_code: 200
 *                 message: Success
 *                 payload:
 *                   message: "We've sent an SMS with 6 digit code to +97******288"
 *                   mfa_token: "Fe26.2*82dcca********"
 *                   oob_code: "Fe26.2*82dcca********"
 *       401:
 *         description: Wrong credentials response
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               description: Wrong email and password.
 *               example:
 *                 error: "error"
 *                 status_code: 401
 *                 message: "The user credentials were incorrect."
 *       400:
 *         description: Bad request error
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               description: Bad request error
 *               example:
 *                 error: "error"
 *                 status_code: 400
 *                 message: "Bad request error."
 */

/**
 * @swagger
 * /auth/verify:
 *   post:
 *     summary: Verify login OTP verification code
 *     description: Verify login OTP verification code
 *     operationId: VerifyLoginOtpVerificationCode
 *     tags:
 *       - Auth
 *     requestBody:
 *       required: true
 *       description: Required field
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - mfa_token
 *               - oob_code
 *               - otp
 *             properties:
 *               mfa_token:
 *                 type: string
 *                 example: "Fe26.2*82dcca******"
 *               oob_code:
 *                 type: string
 *                 example: "Fe26.2*82dcca*******"
 *               otp:
 *                 type: string
 *                 example: "143857"
 *     responses:
 *       200:
 *         description: Successful operation
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               description: success message
 *               example:
 *                 status_code: 200
 *                 message: "Success"
 *                 payload:
 *                   access_token: "eyJhbGciOiJSUz****"
 *                   refresh_token: "cEmIL8t7SyIWE3uGeGltll4wTBWQBD16nD8RtFOmDiVhV"
 *                   expires_in: 3600
 *                   token_type: "Bearer"
 *                   user: {}
 *       422:
 *         description: Validation error
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               description: Fields validation
 *               example:
 *                 error: "error"
 *                 status_code: 422
 *                 message: "Fields Validation Failed."
 *                 payload:
 *                   otp: ["The otp field is required"]
 *       400:
 *         description: Bad request error
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               description: Bad request error
 *               example:
 *                 error: "error"
 *                 status_code: 400
 *                 message: "Bad request error."
 */

/**
 * @swagger
 * /auth/logout:
 *   post:
 *     tags:
 *       - Auth
 *     description: Logout
 *     summary: Logout
 *     security:
 *       - Bearer_auth: []
 *     requestBody:
 *       required: true
 *       description: Required field
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - refresh_token
 *             properties:
 *               refresh_token:
 *                 type: string
 *                 example: "v1.Mu8eN0********"
 *     responses:
 *       204:
 *         description: Logout success
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               description: Logout user
 *               example:
 *                 status_code: 204
 *                 message: "Logged out successfully"
 *       401:
 *         description: Unauthorized error
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               description: Unauthorized error
 *               example:
 *                 status_code: 401
 *                 message: "Unauthorized"
 *       422:
 *         description: Validation error
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               description: Fields validation
 *               example:
 *                 error: "error"
 *                 status_code: 422
 *                 message: "Fields Validation Failed."
 *                 payload:
 *                   refresh_token: ["The refresh token field is required"]
 *       400:
 *         description: Bad request error
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               description: Bad request error
 *               example:
 *                 error: "error"
 *                 status_code: 400
 *                 message: "Bad request error"
 */

/**
 * @swagger
 * /auth/refresh-token:
 *   post:
 *     tags:
 *       - Auth
 *     description: Refresh token
 *     summary: Refresh token
 *     operationId: refreshToken
 *     requestBody:
 *       description: Refresh token
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               refresh_token:
 *                 type: string
 *                 description: "Refresh token"
 *         multipart/form-data:
 *           schema:
 *             type: object
 *             properties:
 *               refresh_token:
 *                 type: string
 *                 description: "Refresh token"
 *     responses:
 *       200:
 *         description: Successful operation
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               description: success message
 *               example:
 *                 status_code: 200
 *                 message: "Success"
 *                 payload:
 *                   access_token: "eyJhbGciOiJSUz****"
 *                   refresh_token: "cEmIL8t7SyIWE3uGeGltll4wTBWQBD16nD8RtFOmDiVhV"
 *                   expires_in: 3600
 *                   token_type: "Bearer"
 *       400:
 *         description: Bad request error
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               description: Bad request error
 *               example:
 *                 error: "error"
 *                 status_code: 400
 *                 message: "Unknown or invalid refresh token."
 */

