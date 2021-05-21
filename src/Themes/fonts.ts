export type FONT_WEIGHTS = '100' | '200' | '300' | '400' | '500' | '600' | '700' | '800' | '900';
export type FONT_TYPE = [number, FONT_WEIGHTS];

export const FONT_TYPES = {
    H1: [24, '800'] as FONT_TYPE,
    H2: [16, '700'] as FONT_TYPE,
    H3: [14, '700'] as FONT_TYPE,
    H4: [12, '800'] as FONT_TYPE,
    NORMAL_A: [16, '500'] as FONT_TYPE,
    NORMAL_B: [16, '400'] as FONT_TYPE,
    NORMAL_C: [15, '500'] as FONT_TYPE,
    BUTTON_NORMAL: [15, '500'] as FONT_TYPE,
    DISCLAMER: [14, '500'] as FONT_TYPE,
    SUBHEADING_A: [15, '400'] as FONT_TYPE,
    SUBHEADING_B: [14, '400'] as FONT_TYPE,
    BUTTON: [16, '700'] as FONT_TYPE,
};
