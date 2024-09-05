/**
 * @swagger
 * /users:
 *   get:
 *     operationId: getAllUsers
 *     security:
 *       - Bearer_auth: []
 *     tags:
 *       - Users
 *     summary: List all users
 *     description: Returns user of the current company
 *     parameters:
 *       - name: limit
 *         in: query
 *         description: Limit
 *         required: false
 *         schema:
 *           type: integer
 *       - name: page
 *         in: query
 *         description: The page number
 *         schema:
 *           type: integer
 *     responses:
 *       200:
 *         description: Successful operation
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 */


/**
 * @swagger
 * /users/{id}:
 *   get:
 *     summary: Get user details of a team member
 *     description: Get user details of a team member
 *     tags:
 *       - Users
 *     security:
 *       - Bearer_auth: []
 *     parameters:
 *       - name: id
 *         in: path
 *         description: User ID
 *         required: true
 *         schema:
 *           type: integer
 *     responses:
 *       200:
 *         description: User fetched successfully
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 status_code:
 *                   type: integer
 *                   example: 200
 *                 message:
 *                   type: string
 *                   example: "User fetched successfully"
 *                 payload:
 *                   type: object
 */


/**
 * @swagger
 * /users/create:
 *   post:
 *     description: Create a new user
 *     tags:
 *       - Users
 *     security:
 *       - Bearer_auth: []
 *     parameters:
 *       - name: id
 *         in: path
 *         description: User ID
 *         required: true
 *         schema:
 *           type: integer
 *     responses:
 *       200:
 *         description: User fetched successfully
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 status_code:
 *                   type: integer
 *                   example: 200
 *                 message:
 *                   type: string
 *                   example: "User fetched successfully"
 *                 payload:
 *                   type: object
 */
