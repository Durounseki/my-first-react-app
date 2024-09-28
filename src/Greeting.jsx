function BasicForm(){
    return (
        <>
        <form>
            <label for="name">Name:</label>
            <input type='text' name="name" id="name"/>
            <button type="button">Submit</button>
        </form>
        <p className = "message">This is cool!</p>
        </>

    )
}

export { BasicForm };