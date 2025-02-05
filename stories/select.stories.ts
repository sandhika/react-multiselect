import type { Meta, StoryObj } from '@storybook/react';
import { fn } from '@storybook/test';
import Select from "../components/select";
import { useCallback, useEffect, useState } from 'react';

const meta = {
  title: 'Sample/React MultiSelect',
  component: Select,
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ['autodocs'],
  parameters: {
    // More on how to position stories at: https://storybook.js.org/docs/configure/story-layout
  },
  args: {
    onChange :fn(),
     
  },
} satisfies Meta<typeof Select>;

export default meta;
type Story = StoryObj<typeof meta>;

const MANGAS = [
  {
      label: "SHONEN",
      options: [
          { value: "One Piece", label: "🤩 One Piece", disabled: false },
          { value: "Naruto Shippûden", label: "🤭 Naruto Shippûden", disabled: false },
          { value: "Hunter x Hunter", label: "🥰 Hunter x Hunter", disabled: false }
      ]
  },
  {
      label: "SHOJO",
      options: [
          { value: "Orange", label: "🤩 Orange", disabled: false },
          { value: "Nana", label: "🤭 Nana", disabled: false },
          { value: "Tonari no Kaibutsu-kun", label: "🥰 Tonari no Kaibutsu-kun", disabled: false }
      ]
  },
  {
      label: "SEINEN",
      options: [
          { value: "Death Note", label: "🤩 Death Note", disabled: false },
          { value: "Btooom!", label: "🤭 Btooom!", disabled: false },
          { value: "Black Lagoon", label: "🥰 Black Lagoon", disabled: false }
      ]
  },
  {
      label: "JOSEI",
      options: [
          { value: "Nodame Cantabile", label: "🤩 Nodame Cantabile", disabled: false },
          { value: "Chihayafuru", label: "🤭 Chihayafuru", disabled: false },
          { value: "Blue", label: "🥰 Blue", disabled: false }
      ]
  },
  { value: "Naruto Shippûden", label: "🤭 Naruto Shippûden", disabled: false },
  { value: "One Piece", label: "🤩 One Piece", disabled: false },
  { value: "Bleach", label: "🥹 Bleach", disabled: false },
  { value: "Boruto", label: "😡 Boruto", disabled: false },
  { value: "Hunter x Hunter", label: "🥰 Hunter x Hunter", disabled: false },
  { value: "Dragon Ball Z", label: "🥵 Dragon Ball Z", disabled: false },
  { value: "Fullmetal Alchemist", label: "🫡 Fullmetal Alchemist", disabled: false },
  { value: "My Hero Academia", label: "🤯 My Hero Academia", disabled: false },
  { value: "Black Clover", label: "😍 Black Clover", disabled: false }
];


    

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Primary: Story = {
  args: {
     options :MANGAS,
     value :"Boruto"
  },
};

