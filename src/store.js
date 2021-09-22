import { configureStore } from '@reduxjs/toolkit'
import  translationReducer from './store/translationSlice' // translationReducer - мы сами придумали это название?
import counterReducer from './store/counterSlice'

export default configureStore({
    reducer: {
        counter: counterReducer,
        translation: translationReducer,
    }
})