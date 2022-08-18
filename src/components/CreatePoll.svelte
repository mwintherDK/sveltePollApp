<script>
    import {createEventDispatcher} from "svelte";
    import PollStore from "../stores/PollStore";
    
    let errorList = {question: "", answer1: "", answer2: ""};

    
    const dispatcher = createEventDispatcher();
    function handleSubmit(e){
        errorList = {question: "", answer1: "", answer2: ""}
        
        let errors = true;
        if (e.target.question.value.length < 5){
            errors = true;            
            errorList.question = "Question has to be longer than 5 characters";
        } else{
            errors = false;            
        }
        if (e.target.answer1.value.length < 1){
            errors = true;            
            errorList.answer1 = "Answer has to be longer than 1 character";
        } else {
            errors = false;            
        }
        if (e.target.answer2.value.length < 1){
            errors = true;            
            errorList.answer2 = "Answer has to be longer than 1 character";
        } else {
            errors = false;            
        }
       
        if(!errors){

            const formData = new FormData(e.target);
            
            const data = {};
            for (let field of formData) {
                const [key, value] = field;
                data[key] = value;
            }
            data.answer1Votes = 0;
            data.answer2Votes = 0;
            data.id = Math.floor(Math.random()*1000);
            PollStore.update(prev => [...prev, data])
            dispatcher("formSubmitted")
        }
    }

</script>

<form on:submit|preventDefault={handleSubmit}>
    <label for="question">Question</label>
    <input type="text" name="question" id="question" placeholder="question"><br>
    <p class="error">{errorList.question}</p>
    <label for="answer1">Answer 1</label>
    <input type="text" name="answer1" id="answer1" placeholder="answer1"><br>
    <p class="error">{errorList.answer1}</p>
    <label for="answer2">Answer 2</label>
    <input type="text" name="answer2" id="answer2" placeholder="answer2"><br>
    <p class="error">{errorList.answer2}</p>
    <button>Add poll</button>
</form>

<style>
    .error{
        color: red;
        font-weight: bold;
        margin-top: 0;
        margin-bottom: 20px;
    }
</style>