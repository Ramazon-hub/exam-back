const express = require('express')
const router = express.Router()
const ClinicsModule = require('./clinics/clinics')
const ClinicCategoriesModule = require('./category/category')
const RegisterModule = require('./register/register.js')
const QueeModule = require('./quee/quee')
const loginModule = require('./login/login')
const homeModule = require('./home/home')
router
    .get('/',homeModule.ALL_DATA)
    .get('/admins/users',)
    .get('/admins/quee',)
    .get('/admins/users/:userID')
    .get('/clinics',ClinicsModule.ALL_CLINICS)
    .get('/clinics/categories',ClinicCategoriesModule.ALL_CATEGORIES)
    
    .post('/clinics/newClinic',ClinicsModule.NEW_CLINIC)
    .post('/newCategory',ClinicCategoriesModule.NEW_CATEGORY)
    .post('/register',RegisterModule.NEW_USER)
    .post('/login',loginModule.LOGIN)
    .post('/quee',QueeModule.NEW_QUEE)
    .post('/submitQuee',)

    module.exports = router