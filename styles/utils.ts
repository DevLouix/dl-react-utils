import styled from "@emotion/styled"

export const DefaultContainer = styled.div`
    height: 100vh;
    width: 100vw;
    background-color: black;
`

export const Row = styled.div<{gap?: string}>`
    display: flex;
    flex-direction: row;
    gap: ${(props)=>props.gap}
`

export const MarginTop = styled.div<{top?: string}>`
    margin-top: ${(props)=>props.top};
`

export const FlexCenter = styled.div`
    height: inherit;
    width: inherit;
    display: flex;
    /* flex-direction: column; */
    align-items: center;
    justify-content: center;
`
export const FlexColumnCenter = styled.div<{gap?: string}>`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: ${(props)=>props.gap}
`
export const FlexColumn = styled.div<{gap?: string, padding ?: string}>`
    display: flex;
    flex-direction: column;
    gap: ${(props)=>props.gap};
    padding: ${(props)=>props.padding}
`

export const ScriptWrapper = styled.div`
    background-color: lightgray;
    border-radius: 2px;
    height: max-content;
    display: flex;
    justify-content: space-between;
    padding: 5px ;
`