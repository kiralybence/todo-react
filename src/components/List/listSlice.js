import { createSlice, nanoid } from '@reduxjs/toolkit';

const initialState = {
    items: [],
};

export const listSlice = createSlice({
    name: 'list',
    initialState,
    reducers: {
        addItem: {
            reducer: (state, action) => {
                state.items.push(action.payload);
            },
            prepare: (val) => {
                return {
                    payload: {
                        id: nanoid(),
                        description: val,
                        completed: false,
                        isEditing: false,
                    },
                };
            },
        },
        toggleCompleted: (state, action) => {
            state.items.map(item => {
                if (item.id === action.payload) {
                    item.completed = !item.completed;
                }

                return item;
            });
        },
        toggleIsEditing: (state, action) => {
            state.items.map(item => {
                if (item.id === action.payload) {
                    item.isEditing = !item.isEditing;
                }

                return item;
            });
        },
        updateItem: (state, action) => {
            state.items.map(item => {
                if (item.id === action.payload.id) {
                    item.description = action.payload.description;
                }

                return item;
            });
        },
        removeItem: (state, action) => ({
            ...state,
            items: state.items.filter(item => item.id !== action.payload),
        }),
    },
});

export const { addItem, toggleCompleted, toggleIsEditing, updateItem, removeItem } = listSlice.actions;
export const selectItems = (state) => state.list.items;
export default listSlice.reducer;
