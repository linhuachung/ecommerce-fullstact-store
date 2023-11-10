"use client"
import React, {useEffect, useState} from 'react'
import {formatter} from "@/lib/utils";

interface CurrencyProps {
    value?: string | number
}
const Currency:React.FC<CurrencyProps> = ({value}) => {
    const [isMounted, seIsMounted] = useState(false)

    useEffect(() => seIsMounted(true) , [])

    if (!isMounted) return null

    return (
        <div className="font-semibold">
            {formatter.format(Number(value))}
        </div>
    )
}

export default Currency
