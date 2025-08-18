import { LEVEL } from "./Level.model.js";
import Python from '../Icons/Lenguages/Python.astro'
import JavaScript from "../Icons/Lenguages/JavaScript.astro";
import Php from "../Icons/Lenguages/php.astro";
import Sql from "../Icons/Lenguages/sql.astro";
import Kotlin from "../Icons/Lenguages/kotlin.astro";

export const LENGUAGES = [
    {
        Name: "Python",
        Level: {
            lvl: LEVEL.IntermedioAvanzado.level,
            color: LEVEL.IntermedioAvanzado.color
        },
        Icon: Python,
    },
    {
        Name: "JavaScript",
        Level: {
            lvl: LEVEL.IntermedioAvanzado.level,
            color: LEVEL.IntermedioAvanzado.color
        },
        Icon: JavaScript,
    },
    {
        Name: "PHP",
        Level: {
            lvl: LEVEL.IntermedioBasico.level,
            color: LEVEL.IntermedioBasico.color
        },
        Icon: Php,
    },
    {
        Name: "SQL",
        Level: {
            lvl: LEVEL.IntermedioAvanzado.level,
            color: LEVEL.IntermedioAvanzado.color
        },
        Icon: Sql,
    },
    {
        Name: "Kotlin",
        Level: {
            lvl: LEVEL.IntermedioAvanzado.level,
            color: LEVEL.IntermedioAvanzado.color
        },
        Icon: Kotlin
    }
    
]