<script>
    export let poll;
    import PollStore from "../stores/PollStore"
    import Button from "../Shared/Button.svelte";

    function handleDelete(pollId){
        PollStore.update(prev => {
            return prev.filter(item => item.id != pollId)
        })
    }

    // Reactive value
    $: totalvotes = poll.answer1Votes + poll.answer2Votes
    $: vote1Percent = (poll.answer1Votes / totalvotes ) * 100;
    $: vote2Percent = (poll.answer2Votes / totalvotes ) * 100;

    function vote(voteOn){

        PollStore.update(prev => {

            let copy = [...prev];
            const correctPoll = copy.find(singlePoll => poll.id === singlePoll.id)

            
            if(voteOn == "answer1Votes"){
                correctPoll.answer1Votes = correctPoll.answer1Votes + 1;
            }
            if(voteOn == "answer2Votes"){
                correctPoll.answer2Votes = correctPoll.answer2Votes + 1;
            }
            return copy;
        })
    }
</script>
    <div class="poll">
        <div class="question">
            <p>{poll.question}</p>
            <div class="totalVotes">Total votes: <span>{totalvotes}</span></div>
            <div class="answer-box" on:click={() => vote("answer1Votes")}>
                <p class="answer answer1" >{poll.answer1} - ({poll.answer1Votes})</p>
                <div class="percent percent-a" style="width: {vote1Percent}%"></div>
            </div>
            <div class="answer-box" on:click={() => vote("answer2Votes")}>
                <p class="answer answer2" >{poll.answer2} - ({poll.answer2Votes})</p>
                <div class="percent percent-b" style="width: {vote2Percent}%"></div>
            </div>
        </div>
        <div class="delete"  >
            <Button type="secondary" on:click={() => handleDelete(poll.id)}>
                Delete Poll
            </Button>
        </div>
    </div>
<style>
    .poll{
  
    }

    .answer{
        padding: 5px;
    }
    

    .answer-box{
        box-sizing: border-box;        
        cursor: pointer;
        position: relative;        
        transition: .2s all;
    }

    .answer-box:hover{
        background: rgba(0, 0, 0, 0.2);
    }
    
    .percent{
        height: 100%;
        position: absolute;
        top: 0;
        left: 0; 

    }

    .percent-a{
        background:rgba(100, 200, 4, .2);
        border-left: 4px solid rgba(100, 200, 4, .5);
    }
    .percent-b{
        background:rgba(76, 4, 200, 0.2);
        border-left: 4px solid rgba(76, 4, 200, 0.5);
    }

    span{
        color: grey;
        font-style: italic;
    }

</style>