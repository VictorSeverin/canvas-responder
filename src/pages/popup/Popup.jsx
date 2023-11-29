import React from 'react';
import logo from '@assets/img/logo.svg';
import { useState, useEffect } from 'react';
import { generateResponse } from '../../server/openai';
export default function Popup() {
  const [minAmount, setMinAmount] = useState(50);
  const [maxAmount, setMaxAmount] = useState(200);
  const [dificultyLevel, setDificultyLevel] = useState('')
  const [selectedText, setSelectedText] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [copySuccess, setCopySuccess] = useState('');

  const [apiResponse, setApiResponse] = useState(''); const handleMinChange = (event) => {
    const value = event.target.value;
    setMinAmount(value);
  };
  const handleMaxChange = (event) => {
    const value = event.target.value;
    setMaxAmount(value);
  };
  const handleSelectChange = (event) => {
    setDificultyLevel(event.target.value);
  };
  useEffect(() => {
    const queryParams = new URLSearchParams(window.location.search);
    const text = queryParams.get('text');
    if (text) {
      setSelectedText(decodeURIComponent(text));
    }
  }, []);
  const handleSubmit = async (event) => {
    event.preventDefault();
    setIsLoading(true);

    const payload = {
      prompt: " You are participating in a discussion board. Reply to the following post made by another member using words at a " + dificultyLevel + " using at least " + minAmount + " and max of " + maxAmount + " words: " + selectedText,
    };
    console.log(payload.prompt)
    try {
      const res = await generateResponse(payload);
      setApiResponse(res.choices[0].text);
    } catch (error) {
      console.log(error)
    }
    setIsLoading(false);
  };

  const handleCopyToClipboard = async () => {
    try {
      await navigator.clipboard.writeText(apiResponse);
      setCopySuccess('Copied!');
      setTimeout(() => setCopySuccess(''), 2000);
    } catch (err) {
      setCopySuccess('Failed to copy');
      setTimeout(() => setCopySuccess(''), 2000);

    }
  };
  return (
    <div className="absolute top-0 left-0 right-0 bottom-0 text-center h-full w-full p-3 text-gray-800">
      <form className="flex flex-col gap-5 items-center justify-center text-white">
        <span className='text-xl font-bold text-gray-800'>Discussion Board Response Generator</span>
        <select className='text-gray-800 border text-md p-3 rounded' value={dificultyLevel} onChange={handleSelectChange} required>
          <option value="">Select response level</option>
          <option value="Highschool">Highschool Level</option>
          <option value="College">College Level</option>
          <option value="Expert">Expert Level</option>
        </select>
        <div className='flex flex-row justify-around text-gray-800'>
          <label htmlFor="min-amount" className="block text-sm font-medium ">
            Min. Words
          </label>
          <input
            type="number"
            id="min-amount"
            required
            name="minAmount"
            value={minAmount}
            onChange={handleMinChange}
            className="mt-1 block w-full pl-3 pr-10 py-2 border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm rounded-md"
            placeholder="Enter minimum amount"
            min="0"
          />
          <label htmlFor="min-amount" className="block text-sm font-medium ">
            Max Words
          </label>
          <input
            type="number"
            id="max-amount"
            required
            name="maxAmount"
            value={maxAmount}
            onChange={handleMaxChange}
            className="mt-1 block w-full pl-3 pr-10 py-2  border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm rounded-md"
            placeholder="Enter minimum amount"
            min="0"
          />
        </div>
        {isLoading ?
          <button type='button' onClick={handleSubmit} className='px-5 py-3 border rounded-lg transform transition duration-500 hover:scale-110 text-gray-800'>Loading</button>
          :
          <button type='button' onClick={handleSubmit} className='px-5 py-3 border rounded-lg transform transition duration-500 hover:scale-110 text-gray-800'>Generate</button>
        }
        {isLoading ? <span>Loading...</span> : <span className='text-black p-2 rounded border cursor-pointer active:scale-95 transition duration-100'
          onClick={handleCopyToClipboard}>{apiResponse}</span>}
        {copySuccess && <span className="text-sm mt-2">{copySuccess}</span>}

      </form>
    </div>
  );
}
