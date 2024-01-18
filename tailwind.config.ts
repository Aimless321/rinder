import type { Config } from 'tailwindcss'
import forms from '@tailwindcss/forms';
import defaultTheme from 'tailwindcss/defaultTheme'

export default <Partial<Config>>{
    plugins: [forms],
    theme: {
        extend: {
            fontFamily: {
                sans: ['Inter var', ...defaultTheme.fontFamily.sans],
            },
        },
    },
}
