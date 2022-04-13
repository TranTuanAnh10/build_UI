const init = {
   todos: [
       {
           title: 'Learn Javascript',
           component: false,
       },
       {
        title: 'Learn HTML, CSS',
        component: true,
    }
   ]
}

export default function reducer(state = init, action, args) {
    switch (action){
        default:
            return state;
    }
}