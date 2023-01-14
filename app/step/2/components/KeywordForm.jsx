"use client"
import { useState } from "react"
import Link from "next/link"
import { Button } from "../../../common/Button"
import { Title } from "../../../common/Title"
import { Keyword } from "./Keyword"

const KeywordForm = () => {
    const [keywordNum, setKeywordNum] = useState(0)
    const [isDisabled, setIsDisabled] = useState(false)
    const getKeywordNum = (x) => {
        setIsDisabled(!(x >= 2 && x <= 5))
    }

    return (
        <div className="flex flex-col h-full">
            <div className="py-10">
                <Title
                    main={"감사 키워드를 골라주세요!"}
                    sub={"2~5개, 콕 집어주세요!"}
                />
            </div>
            <div className="grid grid-cols-3 gap-y-3.5 gap-x-1.5 mb-10">
                <Keyword
                    keywordNum={keywordNum}
                    setKeywordNum={setKeywordNum}
                    getKeywordNum={getKeywordNum}
                />
            </div>
            <div className="mt-auto mb-5">
                <Link href="/step/3">
                    <Button disabled={isDisabled}>
                        {keywordNum === 0 && "키워드를 골라볼까요?"}
                        {keywordNum === 1 && "키워드를 더 선택해보아요"}
                        {keywordNum >= 2 &&
                            keywordNum <= 5 &&
                            "편지 만드러 가보기"}
                    </Button>
                </Link>
            </div>
        </div>
    )
}

export { KeywordForm }
