
const ErrorMessage = ({ errorMessage }) => {
    return (
        <>
            {errorMessage && <p style={{ color: 'red', fontSize: "20px", margin: "0 auto" }}>Search query is empty</p>}
        </>

    )
}

export default ErrorMessage