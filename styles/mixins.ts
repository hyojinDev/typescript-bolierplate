const mixins = {
  flexBox: (direction = 'row', align = 'center', justify = 'center') => `
    display: flex;
    flex-direction: ${direction};
    align-items: ${align};
    justify-content: ${justify};
  `,

  fadeIn: (isVisible: boolean, transformY: boolean, duration: number, delay: number) => `
    opacity: ${isVisible ? "1" : "0"};
    transform: translateY(${transformY ? "0px" : "10px"});
    transition: all ${duration}ms ease-in-out ${delay}ms;
  `
};

export default mixins;