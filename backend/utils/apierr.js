class apierr extends Error{
    constructor(
        statuscode,message="something went wrong",error=[],
        stack=""
    ){
        super(message)
        this.statuscode=statuscode
        this.message=message
        this.error=error
        this.data=null
        if(stack) this.stack=stack
        this.success=false
        Error.captureStackTrace(this,this.constructor)
    }
}
export default apierr