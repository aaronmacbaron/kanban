import initialState from "../data/initialLanesState.json";

export const laneData = {
    state: initialState,
    reducers: {
      updateLanes: (state, payload) => {
        return state = payload
      },
      selectItem: (state, payload) => {
        return {...state, selectedItem : {...payload}}
      },
      setMaxEarnableExp: (state, payload) =>{
        return {...state, maxEarnableExp: payload}
      },
    },
    effects: (dispatch) => ({
        // handle state changes with impure functions.
        // use async/await for async actions
        async updateLanesAsync(payload, rootState) {
          await new Promise((resolve) => setTimeout(resolve, 1000));
          dispatch.lanes.updateLanes(payload);
        },
      }),
  };

  export const userData = {
    state: {},
    reducers: {

    },
    effects: (dispatch) => ({

    })
  };
