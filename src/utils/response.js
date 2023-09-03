const successResponse = (response, message, data, status =200)  => {
    return response.json({
        status,
        message,
        data
    });
}

const errorResponse = (response, message, status = 400)=>{
        return response.status(status).json({
            status,
            message
        });
}

export {successResponse, errorResponse};
