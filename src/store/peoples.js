export default store => {
    store.on('@init', () => ({
      peoples: []
    }));
  
    store.on('peoples', (state, newData) => {
      var storage = JSON.parse(localStorage.getItem('votesStorage'));
      if(storage) {

        return {
          peoples: storage
        };

      }
      return {
        peoples: newData.data
      };
    });

    store.on('peoples/votes', (state, newData) => {
      return {
        peoples: state.peoples.map((person) =>  {
          if(person.id === newData.id) {
            return {
              ...person,
              vote_indicator: {
                upvote: newData.upvote,
                downvote: newData.downvote
              }
            }
          }
          else {
            return person
          }
        })
      };
    });

    store.on('peoples/voted', (state, newData) => {
 
      let votesStorage = state.peoples.map((person) =>  {
          
        if(person.id === newData.id) {
          if(newData.voted === true) {
            if(person.vote_indicator.upvote === true){
              person.upVotes = person.upVotes < 99 ? (person.upVotes + 1) : (100);
              person.downVotes = person.downVotes > 0 ? (person.downVotes - 1) : (0);
            }
            if(person.vote_indicator.downvote === true){
              person.downVotes = person.downVotes < 99 ? (person.downVotes + 1) : (100);
              person.upVotes = person.upVotes > 0 ? (person.upVotes - 1) : (0);
            }
          }
          else{
            person.vote_indicator.upvote = false;
            person.vote_indicator.downvote = false;
          }

          person.voted = newData.voted;
          return  person;            
        }
        else {
          return person;
        }
      });

      localStorage.setItem('votesStorage',JSON.stringify(votesStorage));

      return {
        peoples: votesStorage
      };
    });

  };