const { fetch,fetchAll } = require('../../lib/postgres')

const NEW_CATEGORY = `
    insert into clinic_category(
        category_name,
        clinic_id
    )values($1,$2) returning *
`
const ALL_CATEGORIES = `
    select * from clinic_category
`

const newCategory = (categoryName,clinicId) => fetch(NEW_CATEGORY,categoryName,clinicId);
const allcategories = ()=>fetchAll(ALL_CATEGORIES)

module.exports = {
    newCategory,
    allcategories
}


