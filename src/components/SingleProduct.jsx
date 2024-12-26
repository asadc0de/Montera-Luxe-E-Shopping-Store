import React from "react";

const SingleProduct = ({ product }) => {
    if (!product) {
        // Handle undefined product gracefully
        return <div>Loading...</div>;
    }

    return (
        <div className="cursor-pointer">
            {/* Image */}
            <div className="w-full lg:h-[35vw] sm:h-[62vw] h-[100vw]">
                <img
                    className="w-full h-full object-cover"
                    src={product.firstImage || "placeholder.jpg"} // Fallback for missing image
                    alt={product.name || "Product"} // Fallback for missing name
                />
            </div>
            {/* Name & price */}
            <div className="flex justify-between mt-3 font-CreatoDisplay">
                <h3 className="text-sm md:text-base">{product.name || "Unnamed Product"}</h3>
                <p className="text-sm md:text-base font-semibold">{product.price || "N/A"}</p>
            </div>
        </div>
    );
};

export default SingleProduct;