export default {
  methods: {
    capitalizeEachWord(sentence: string): string {
      return sentence.replace(/(^\w{1})|(\s+\w{1})/g, (letter) =>
        letter.toUpperCase()
      );
    },
  },
};
