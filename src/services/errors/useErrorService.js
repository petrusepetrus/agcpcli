import testIfPromise from '../../utils/GeneralUtilities.js'
export default function useErrorService(){
    const errorMessageHandler=async(errorReturned)=>{
        console.log(errorReturned)
        let errorMessage={}
         if(testIfPromise(errorReturned)){
            errorReturned.then((error) => {
                /*
                The error handler throws a promise.reject so we need to resolve the promise
                to access the error information
                 */
                console.log(error)
                errorMessage.title = error.title
                errorMessage.description = error.description
                errorMessage.status=error.status
                console.log(errorMessage.title)
                //error.description=e
            })
        }else{
            errorMessage.title=errorReturned.title
        }
         console.log(errorMessage)
         return errorMessage
    }
    return{
        errorMessageHandler
    }
}