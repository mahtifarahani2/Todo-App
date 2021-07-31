import React, { useState } from 'react';
import Layout from '../components/Layout';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faCheckSquare,
    faPenSquare,
    faPlusSquare,
    faTrashAlt,
} from '@fortawesome/free-solid-svg-icons';

const App = () => {
    const [getJobs, setJobs] = useState([]);
    const [getNewjob, setNewjob] = useState('');
    const [getEdit, setEdit] = useState({});

    const addJobs = () => {
        const current = [...getJobs];
        current.push(getNewjob);
        setJobs(current);
        setNewjob('');
    };
    const deleteJobs = (index) => {
        const current = [...getJobs];
        const filtered = current.filter((item, key) => {
            if (index !== key) {
                return true;
            }
        });
        setJobs(filtered);
        setEdit({});
    };

    const onEdit = (index) => {
        setEdit({ index, value: getJobs[index] });
    };

    const onEdited = (index) => {
        let current = [...getJobs];
        current[index] = getEdit.value;
        setJobs(current);
        setEdit({});
    };

    return (
        <Layout>
            <div className="bg-purple sticky top-0 ">
                <main className="max-w-xl mx-auto flex justify-center">
                    <h1 className="font-title text-2xl text-center p-2 ">
                        What's the Plan for Today?
                    </h1>
                </main>
            </div>
            <section className="bg-orange mx-auto w-2/3 h-full mt-2 rounded-md p-2">
                <div className="flex justify-center flex-col space-y-2">
                    <p className="flex items-center justify-center p-3 ">
                        <span className="bg-purple w-8 rounded-full p-1 text-white text-center mr-2">
                            {getJobs.length}
                        </span>
                        work not done!
                    </p>
                    <textarea
                        className="max-w-[12rem] min-h-[6rem] mx-auto max-h-0 rounded-md bg-white"
                        rows="5"
                        cols="33"
                        value={getNewjob}
                        onChange={(event) => {
                            setNewjob(event.target.value);
                        }}
                    />
                    <button className="bg-purple w-10 mx-auto rounded-md " onClick={addJobs}>
                        <FontAwesomeIcon
                            icon={faPlusSquare}
                            className="text-4xl text-purpleLite p-1"
                        />
                    </button>
                    {getJobs.map((item, index) => {
                        return (
                            <div className="flex bg-white rounded-md items-center relative">
                                <div className="flex bg-purple h-11 w-11 m-1 rounded-md items-center pl-4 text-white p-2">
                                    {index + 1}
                                </div>
                                {index === getEdit.index ? (
                                    <>
                                        <input
                                            value={getEdit.value}
                                            onChange={(event) => {
                                                const current = { ...getEdit };
                                                setEdit({ ...current, value: event.target.value });
                                            }}
                                        />
                                        <button
                                            className="bg-purple rounded-md absolute p-1 flex absolute right-11 m-1"
                                            onClick={() => {
                                                onEdited(index);
                                            }}
                                        >
                                            <FontAwesomeIcon
                                                icon={faCheckSquare}
                                                className="text-4xl text-purpleLite p-1"
                                            />
                                        </button>
                                    </>
                                ) : (
                                    <>
                                        <p>{item}</p>
                                        <button
                                            className="bg-purple rounded-md absolute p-1 flex absolute right-11 m-1"
                                            onClick={() => {
                                                onEdit(index);
                                            }}
                                        >
                                            <FontAwesomeIcon
                                                icon={faPenSquare}
                                                className="text-4xl text-purpleLite p-1"
                                            />
                                        </button>
                                    </>
                                )}
                                <button
                                    className="bg-purple rounded-md p-1 flex absolute right-0 m-1"
                                    onClick={() => {
                                        deleteJobs(index);
                                    }}
                                >
                                    <FontAwesomeIcon
                                        icon={faTrashAlt}
                                        className="text-4xl text-purpleLite p-1"
                                    />
                                </button>
                            </div>
                        );
                    })}
                    {}
                </div>
            </section>
        </Layout>
    );
};

export default App;
