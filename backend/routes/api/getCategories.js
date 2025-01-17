import databaseController from '../../controllers/database.controller.js'

export default async (request, response) => {
  try {
    const categories = await databaseController.getCategories()
    response.status(200).json(categories)
  } catch (e) {
    response.status(500).json({ error: 'Internal server error', message: e })
  }
}
