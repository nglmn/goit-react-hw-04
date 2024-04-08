
const ErrorMessage = ({ errorMessage }) => {
    return (
        <>
            {errorMessage && <p style={{ color: 'red' }}>ErrorMessage</p>}
        </>

    )
}

export default ErrorMessage