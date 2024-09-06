import { configureStore} from "@reduxjs/toolkit";
import products from './slice/product.slice';
export default configureStore ({
    reducer: {
        products,
        
    }
});
